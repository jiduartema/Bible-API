<script>
    import {db} from './firebase';

    let Devotional = {
        biblicalQuotes: "",
        description: ""
    }

    const addDevotional = () => {
        db.collection('devotionals').doc().set(Devotional);
    };

    const sendDevotional = (e) => {
        e.preventDefault();
        addDevotional();
    }
</script>

<style>
</style>

<form on:submit={sendDevotional}>
    <input bind:value={Devotional.biblicalQuotes} type="text" placeholder="Biblical quotes" />
    <textarea bind:value={Devotional.description} rows="3" placeholder="Description" />
    <button> save </button>
</form>
