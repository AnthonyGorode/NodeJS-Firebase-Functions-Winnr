const admin = require("firebase-admin");

const config_adm_sdk = {
    "type": "service_account",
    "project_id": "winnr-feed",
    "private_key_id": "4b395ad155611d358d5ba7e4e73d929549f27c17",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCyPdWPYFbASaqG\nmvjiuYDWCiHX+jf00OMP4WeooUVdyu4AAaRUOo3b4cEnGrBJ83bLqW1dMwRvAN6l\nfOghitbwGpbvL7GCFndViPKtEhFMtsihu0ZBEE2zG5+OkJvK0Q8W7zGRpBEvoo/T\nOiHs0HSGOCUVOVHnPAcS8A3V3LV3cQSdkZJ8kVy/85E8CK8TzUWJHbC+ChMbB5Cz\nwUC5BNIweM/KRBr+7qTU+Q8/eiovMra5HajBpBD9SkiLUi33itVtZLes4HX1B5uu\nAs52eYySN4YpBq3zpvdh9L2EgAeeAScYuz7h/RF5/mCqbs1XFOHJHfCjUQAU13LF\n7wwmzNGHAgMBAAECggEAKQ83d/zQXyFZKALhHJFxDV1uKGuaoknQVKMvFth3u0B5\nDQVTzpdigGmD7jcmrxJnpkjUSajr94oyv9qDOt7Z3puxc04ATSBRwyF2Dcpgs9RT\naXZTm79etsjBO70yNklseXMGby9lShzfluAIWp42iYi7eiUnKeZZFtK3zTE3mFjM\n+xQp03K/b90fvvUnR85WmB5oO/0i0S82oQclbyXbAS4jmG85pbQlv+CiKJpmQbYF\nozLq8j24ebnONLHa3FT+rUyDYJpurotJrhQfKnh4TfczTUWbDrGQJZ6ORGbB52oj\nrsJepq85mZI7rR4cCRuYVNItnRSTbt1brOCSqpafOQKBgQDkt+nZbVg6GKGd/B3+\n5IdMO6lFlSFvVQMFdei8FB33x4od2waMlXb9ZxSfXhS9b8JgEQV5+cL5DyVCgckR\nB8dY5uzATjz5mipfjHiUkR0nRuJSz44ZHHgvhAgWiF70/0ExoYfrxqYXuXQEhCaI\nLwV8TQexeS/srsGFJdy+K0u33QKBgQDHgJJtLvT8sYTLPyfHwW6p8/SkOvqIXZQ5\nTRxjpAyLx5WBRm+7D52c8wybim5hZtVuJ8Efe5y+nC/GhlaSXFeBB+X0d9KwcoC2\nsKkVcf3Y4gEW2oyiztz/8M14Y0LllFIPDjOoJTGhpZ2Vw3XhxIuzaX5N9rID/oy4\nSp70LOUqswKBgGXGvUXmlWsMyOZPaV2ifd5bciCnkwBCuRx18oG3BfrbjUdpzolC\nfXeXpiKgr+P4Vmt/R4uWq78+kRr+O+XbK0cRQ2rzpciAZLit/n5F8M4oic/F0nq0\nI3spapv0RSUKbQ1TzvMJK6HFAa58y9Sv7+X3NSQxRDUzMqQ4S/lHtOL1AoGAJ1q1\nh9Q7f52FFJLgxgbiTaRSHhOEWGIdWzBa6UzzLJ+yXk4GvF/YN526XvRv0cb3U0OE\nVTGNOgyVYBQf/783g7yLIC6C4Uu1GFTBBfn2mVH75QY3t+YWsmZOIfFywNcBWPb0\nObcck0aYT3K/Tkn3RO0KfVasxxzvpWsS8BfrHQECgYB6iIfkgCaYuD36JEdiyJOO\nmju3KF+bIpskUcK0AaMAuBcYqJZ2P5ndkKbBXdtGsGRvG5On4oJ101OWgZudRe9i\nLOhc9iaAt37UMQzOHqoiMxRAuOIH8wstz6oaGoEfWGlTUF/z/rhF1qQfed8O1vZs\nBY5I6Gdv44A5q+AWkkyzQw==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-56ww5@winnr-feed.iam.gserviceaccount.com",
    "client_id": "113245016255121574405",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-56ww5%40winnr-feed.iam.gserviceaccount.com"
};

admin.initializeApp({
    credential: admin.credential.cert(config_adm_sdk),
    databaseURL: "https://winnr-feed.firebaseio.com"
});

module.exports = admin;