<template>
    <div id="author">
        <div class="authorTitle">
            <h1>The Author</h1>
        </div>
        <div class="authorInfo">
            <div class="authorPic ovalContainer">
                <img class="ovalImage" src="@/assets/IsaacAgbe.jpeg" alt="Failed to load img" />
            </div>
            <p class="authorPara">All publications in this series are authored by Rev. Fr. Isaac AGBENOHEVI. He was born and
                bred in Akwatia
                (Ghana)
                and a Catholic Priest incardinated in the Catholic Diocese of Koforidua (Ghana). He holds a B.A. in
                Sociology and
                the Study of Religion from the University of Ghana, Bachelor of Sacred Theology (Pontifical Urban
                University,
                Rome-Italy), Certificate in Jewish Studies (Harvard University, Cambridge, MA – USA), Licentiate in Sacred
                Scripture
                (S.S.L.) (Pontifical Biblical Institute, Rome-Italy) and Doctorate in Sacred Scripture (S.S.D.) (Pontifical
                Biblical
                Institute, Rome-Italy). He was a Research Assistant at the Pontifical Biblical Institute, Rome-Italy
                (2022-2023) and
                has diverse professional working experience in Ghana, Italy, Germany, Portugal, and USA. He has proficient
                working
                knowledge of the biblical Languages and some modern Languages. He co-authored the book, A Wonderful
                Personality and
                His Journey of Faith (The Story of Archbishop Peter Kwasi Sarpong) and authored other books such as An
                Imperishable
                Wreath: The Price of a Life Well Lived (A Look at the Life of Most Rev. Joseph Oliver Bowers, SVD) and The
                Roots of
                Our Faith: An Introduction to the Reading of Scripture (vol.1). He is currently into Teaching and Parish
                Pastoral
                Ministry in the USA. </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutAuthor"
}
</script>
<style>
#author {
    margin-top: 5vh;
    margin-bottom: 5vh;
}

.authorTitle {
    position: relative;
    left: 45%;
}

.authorInfo {
    display: flex;
}

.authorPara {
    position: relative;
    left: 10%;
    padding: 10px;
    text-align: justify;
    align-content: justify;
    width: 50%;
}

.ovalContainer {
    width: 300px;
    height: 400px;
    overflow: hidden;
    border-radius: 50%;
    margin-left: 10vw;
}

.ovalImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Maintain aspect ratio */
}
</style>