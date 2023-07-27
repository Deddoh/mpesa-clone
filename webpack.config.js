module.exports={    
resolve:{
    fallback: {
        "util": require.resolve("util"),
        net: false,
        tls:false,
        crypto:false,
        assert:false,
        https:false
    }
}
}