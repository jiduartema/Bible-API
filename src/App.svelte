<script>
    import { db } from "./firebase";

    let Devotional = {
        biblicalQuotes: "",
        description: "",
    };
    let listDevotional = [];

    db.collection("devotionals").onSnapshot((querySnapshot) => {
        let docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
        });
        listDevotional = [...docs];
    });

    const addDevotional = async () => {
        await db
            .collection("devotionals")
            .doc()
            .set({
                ...Devotional,
                createdAt_: Date.now(),
            });
        console.log("New Devotional created");
    };

    const sendDevotional = (e) => {
        e.preventDefault();
        addDevotional();
        Devotional = { biblicalQuotes: "", description: "" };
    };
    const deleteDevotional = async (id) => {
        await db.collection("devotionals").doc(id).delete();
        console.log("Devotional deleted successfully!");
    };
</script>

<style>
</style>

<form on:submit={sendDevotional}>
    <div class="container col-md-4">
        <br>
        <span class="badge rounded-pill bg-dark">Create your devotional for the
            day</span>
        <div>
            <div class="mb-3">
                <br>
                <label for="formBiblicalQuotes" class="form-label">Biblical Reference</label>
                <input
                    bind:value={Devotional.biblicalQuotes}
                    type="text"
                    class="form-control"
                    id="formBiblicalQuotes" />
            </div>
            <div class="mb-3">
                <label
                    for="formDescription"
                    class="form-label">Descripcion</label>
                <textarea
                    bind:value={Devotional.description}
                    class="form-control"
                    id="formDescription"
                    rows="3" />
            </div>
        </div>

        <button class="btn btn-success"> Save </button>
    </div>
</form>

{#each listDevotional as listDevotionals}
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">
                    <span class="badge rounded-pill bg-dark">
                        {listDevotionals.biblicalQuotes}
                    </span>
                </h5>
            </div>
            <div class="modal-body">
                <p>{listDevotionals.description}</p>
            </div>
            <div class="modal-footer">
                <button
                    type="button"
                    class="btn btn-danger"
                    data-bs-dismiss="modal"
                    on:click={deleteDevotional(listDevotionals.id)}>
                    Delete
                </button>
            </div>
        </div>
    </div>
{/each}


<footer class="bg-light text-center text-lg-start">
    <div class="text-center p-3" style="background-color: #FFFFFF">
        © 2020 - Designed with <span class="fas fa-heart" style="color: #FF2C00"></span> by
        <a class="text-dark" href="https://www.itduarsoft.com/">ITDUARSOFT</a>
    </div>
</footer>