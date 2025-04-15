<template>
    <landing-navbar>
    </landing-navbar>

    <hero>
    </hero>

    <features>
    </features>

    <testemonials>
    </testemonials>
</template>

<script>
import landingNavbar from '@/components/landing-page/LandingNavbar.vue';
import hero from '@/components/landing-page/Hero.vue';
import features from '@/components/landing-page/Features.vue';
import testemonials from '@/components/landing-page/Testemonials.vue';

export default{
    name: 'landingPage',
    components: 
    {
    landingNavbar, hero, features, testemonials
    }
}
</script>

