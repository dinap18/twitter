<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
    <div class="q-py-lg q-px-md row q-col-gutter-md items-end">
      <div class="col">
        <q-input class="new-tweet" bottom-slots autogrow v-model="newTweetContent" placeholder="What's happening?" counter maxlength="280" >
        <template v-slot:before>
          <q-avatar size="xl">
            <img src="https://previews.123rf.com/images/marysan9/marysan91810/marysan9181000080/110399871-round-robot-icon-line-style-on-white-background.jpg">
          </q-avatar>
        </template>
      </q-input>
    </div>
      <template>
        <div class="col col-shrink">
           <q-btn class="q-mb-lg" @click="addNewTweet" unelevated rounded color="primary" :disable="!newTweetContent" no-caps label="Dina-Tweet" />
        </div>
      </template>
      </div>
      <q-separator class="divider" size="10px" color="grey-2"/>
       <q-list separator>
        <transition-group appear enter-active-class="animated fadeIn slow" leave-active-class="animated fadeOut slow">
      <q-item v-for="tweet in tweets" :key="tweet.date" class="tweet q-py-md">
        <q-item-section avatar top>
          <q-avatar>
            <img src="https://previews.123rf.com/images/marysan9/marysan91810/marysan9181000080/110399871-round-robot-icon-line-style-on-white-background.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>Dina </strong>
            <span class="text-grey-7">@Dina <br class="lt-md">&bull;  {{ tweet.date | relativeDate }}</span>
          </q-item-label>
          <q-item-label class="tweet-content text-body1" >
            {{ tweet.content }}
          </q-item-label>
          <div class="row justify-between q-mt-sm tweet-icons">
          <q-btn flat round color="grey" size="sm" icon="far fa-comment"/>
          <q-btn flat round color="grey" size="sm" icon="fas fa-retweet"/>
          <q-btn @click="toggleLiked(tweet)" flat round :color="tweet.liked ? 'pink' : 'grey' " size="sm" :icon="tweet.liked ? 'fas fa-heart' : 'far fa-heart'"/>
          <q-btn flat round color="grey" size="sm" icon="fas fa-trash" @click="deleteTweet(tweet)"/>
          </div>
        </q-item-section>
      </q-item>
      </transition-group>
    </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import db from 'src/boot/firebase'
import { formatDistance } from 'date-fns'
export default {
  name: 'PageHome',
  data () {
    return {
      newTweetContent: '',
      tweets: []
    }
  },
  methods: {
    addNewTweet () {
      const newTweet = {
        content: this.newTweetContent,
        date: Date.now(),
        liked: false
      }
      db.collection('tweets').add(newTweet).then(function (docRef) {
        console.log('Document written with ID: ', docRef.id)
      }).catch(function (error) {
        console.error('Error adding document: ', error)
      })
      this.newTweetContent = ''
    },
    deleteTweet (tweet) {
      db.collection('tweets').doc(tweet.id).delete().then(function () {
        console.log('Document successfully deleted!')
      }).catch(function (error) {
        console.error('Error removing document: ', error)
      })
    },
    toggleLiked (tweet) {
      db.collection('tweets').doc(tweet.id).update({
        liked: !tweet.liked
      })
        .then(function () {
          console.log('Document successfully updated!')
        })
        .catch(function (error) {
          console.error('Error updating document: ', error)
        })
    }
  },
  filters: { relativeDate (value) { return formatDistance(value, new Date()) } },
  mounted () {
    db.collection('tweets').orderBy('date').onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        const tweetChange = change.doc.data()
        tweetChange.id = change.doc.id
        if (change.type === 'added') {
          console.log('New tweet: ', tweetChange)
          this.tweets.unshift(tweetChange)
        }
        if (change.type === 'modified') {
          console.log('Modified tweet: ', tweetChange)
          const index = this.tweets.findIndex(tweet => tweet.id === tweetChange.id)
          Object.assign(this.tweets[index], tweetChange)
        }
        if (change.type === 'removed') {
          console.log('Removed tweet: ', tweetChange)
          const index = this.tweets.findIndex(tweet => tweet.id === tweetChange.id)
          this.tweets.splice(index, 1)
        }
      })
    })
  }
}
</script>

<style lang="sass">
.new-tweet
  text-area
    font-size: 19px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
.tweet-content
  white-space: after-line
.tweet-icons
  margin-left: -5px
.tweet:not(:first-child)
  border-top: 1px solid rbga(0,0,0,0.12)
</style>
