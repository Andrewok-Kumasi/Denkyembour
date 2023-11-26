<template>
    <div class="background-video-container">
        <video autoplay loop muted playsinline>
            <!-- Local video file -->
            <source src="@/assets/Sunset_Boat01_MP4_HDV_1080p25__TanuriX_Stock_Footage_NS.mp4" type="video/mp4">
            <!-- External video file -->
            <!-- <source src="https://example.com/path/to/background.mp4" type="video/mp4"> -->
            Your browser does not support the video tag.
        </video>
        <!-- Your component content goes here -->
    </div>
</template>
  
<script>
export default {
    // Your component logic goes here
};
</script>
  
<style>
.background-video-container {
    position: absolute;
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
    object-fit: cover;
    /* Adjust as needed */
}
</style>
