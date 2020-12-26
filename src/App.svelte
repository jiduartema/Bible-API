<script>
    import { db } from "./firebase";

    let Devotional = {
        biblicalQuotes: "",
        description: "",
    };
    let listDevotional = [];

    db.collection('devotionals').onSnapshot(querySnapshot => {
        let docs = [];
        querySnapshot.forEach(doc => {
            docs.push({...doc.data(), id: doc.id});
        })
        listDevotional = [...docs];
    });

    const addDevotional = async () => {
        await db.collection("devotionals").doc().set({
            ...Devotional, createdAt_: Date.now()
        });
        console.log('New Devotional created');
    };

    const sendDevotional = (e) => {
        e.preventDefault();
        addDevotional();
        Devotional = {biblicalQuotes: '', description: ''};
    };
    const deleteDevotional = async(id) => {
        await db.collection('devotionals').doc(id).delete();
        console.log('Devotional deleted successfully!');
    }
</script>

<style>
</style>

<form on:submit={sendDevotional}>
    <input
        bind:value={Devotional.biblicalQuotes}
        type="text"
        placeholder="Biblical quotes" />
    <textarea
        bind:value={Devotional.description}
        rows="3"
        placeholder="Description" />
    <button> save </button>
</form>

{#each listDevotional as listDevotionals}
<div>
    <h5>{listDevotionals.biblicalQuotes}</h5>
    <p>{listDevotionals.description}</p>
    <button on:click={deleteDevotional(listDevotionals.id)}>
        delete
    </button>
</div>
{/each}