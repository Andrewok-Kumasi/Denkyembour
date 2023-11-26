<template>
    <div class="backgroundvideo">
        <video autoplay loop muted playsinline>
            <!-- Local video file -->
            <source src="@/assets/Sunset_Boat01_MP4_HDV_1080p25__TanuriX_Stock_Footage_NS.mp4" type="video/mp4">
            <!-- External video file -->
            <!-- <source src="https://example.com/path/to/background.mp4" type="video/mp4"> -->
            Your browser does not support the video tag.
        </video>
    </div>
</template>
<script>

export default {
    name: "SiteBanner"
}
</script>
<style>
.backgroundvideo {
    position: relative;
    width: 100%;
    height: 100vh;
    /* Adjust as needed */
    overflow: hidden;
}

video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    object-fit: cover;
    /* Adjust as needed */
}
</style>