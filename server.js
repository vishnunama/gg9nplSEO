const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Redirect index.html to root
app.get('/index.html', (req, res) => {
    res.redirect(301, '/');
});

// Root Route
app.get('/', (req, res) => {
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GG9",
            "url": "https://casino.gg9npl.com/",
            "logo": "/assets/images/logo.png",
            "description": "Best online casino platform in Nepal offering real cash casino games, secure gameplay, and fast withdrawals",
            "sameAs": [
                "https://gg9npl.com/"
            ],
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "support@gg9npl.com",
                "availableLanguage": ["en"]
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://casino.gg9npl.com/",
            "name": "GG9 - Best Online Casino Platform in Nepal",
            "description": "Premium online casino platform in Nepal with real cash games, mobile access, and secure transactions"
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Is GG9 available in Nepal?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, GG9 is available for users in Nepal and supports online casino gaming access for Nepal players."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is GG9 mobile-friendly?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, GG9 is fully optimized for smartphones and tablets to provide smooth and responsive gameplay."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does GG9 offer bonus rewards?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, users can explore promotional rewards and bonus offers on the platform."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is GG9 safe to use?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "GG9 focuses on secure gameplay, safe transactions, and reliable platform performance for users."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can users enjoy real cash casino games?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, GG9 offers exciting real cash gaming experiences and multiple casino games for players in Nepal."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How fast are withdrawals on GG9?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The platform focuses on providing smooth and fast withdrawal processing for users."
                    }
                }
            ]
        }
    ];

    res.render('index', {
        title: 'Best Online Casino Platform in Nepal | GG9 - Real Cash Games',
        description: 'GG9 is the best online casino platform in Nepal. Enjoy real cash casino games, fast withdrawals, mobile-friendly gaming, and secure gameplay with exciting bonus offers.',
        canonicalUrl: 'https://casino.gg9npl.com/',
        ogType: 'website',
        ogUrl: 'https://casino.gg9npl.com/',
        ogTitle: 'Best Online Casino Platform in Nepal | GG9',
        ogDescription: 'Experience the best online casino platform in Nepal with real cash games, secure payments, and fast withdrawals.',
        ogImage: 'https://casino.gg9npl.com/assets/images/gg9_win.png',
        twitterUrl: 'https://casino.gg9npl.com/',
        twitterTitle: 'Best Online Casino Platform in Nepal | GG9',
        twitterDescription: 'Secure online casino gaming in Nepal with real cash games and fast withdrawals',
        twitterImage: 'https://casino.gg9npl.com/assets/images/gg9_win.png',
        activePage: 'home',
        schemas: schemas
    });
});

// Redirect legacy blog.html route to pretty route
app.get('/blog.html', (req, res) => {
    res.redirect(301, '/blog');
});

// Blog Route handler
app.get('/blog', (req, res) => {
    res.render('blog', {
        title: 'GG9 Casino Blog | Guides, Tips & Online Gaming Trends in Nepal',
        description: 'Welcome to the GG9 Casino Blog. Read guides, expert tips, mobile gaming trends, and security reviews for online casino gaming in Nepal.',
        canonicalUrl: 'https://casino.gg9npl.com/blog',
        ogType: 'website',
        ogUrl: 'https://casino.gg9npl.com/blog',
        ogTitle: 'GG9 Casino Blog | Guides & Gaming Tips in Nepal',
        ogDescription: 'Discover the latest in Nepal\'s online casino scene. Read our expert guides, game reviews, and safety tips.',
        ogImage: 'https://casino.gg9npl.com/assets/images/gg9_win.png',
        twitterUrl: 'https://casino.gg9npl.com/blog',
        twitterTitle: 'GG9 Casino Blog | Guides & Gaming Tips in Nepal',
        twitterDescription: 'Read expert online casino guides, mobile gaming updates, and safety tips for Nepal players.',
        twitterImage: 'https://casino.gg9npl.com/assets/images/gg9_win.png',
        activePage: 'blog',
        schemas: []
    });
});

// Redirect legacy best-online-casino-platform-nepal.html route to pretty route
app.get('/best-online-casino-platform-nepal.html', (req, res) => {
    res.redirect(301, '/best-online-casino-platform-nepal');
});

// Casino Guide Route handler
app.get('/best-online-casino-platform-nepal', (req, res) => {
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Best Online Casino Platform in Nepal – A Complete Guide to Safe and Exciting Online Gaming",
            "description": "Discover why GG9 is becoming the preferred online casino platform in Nepal, offering real cash games, mobile-friendly gaming, fast withdrawals, and secure transactions.",
            "image": "https://casino.gg9npl.com/assets/images/casino-platform.png",
            "author": {
                "@type": "Organization",
                "name": "GG9 Editors",
                "url": "https://casino.gg9npl.com/"
            },
            "publisher": {
                "@type": "Organization",
                "name": "GG9",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://casino.gg9npl.com/assets/images/logo.png"
                }
            },
            "datePublished": "2026-05-24",
            "dateModified": "2026-05-24",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://casino.gg9npl.com/best-online-casino-platform-nepal"
            }
        }
    ];

    res.render('best-online-casino-platform-nepal', {
        title: 'Best Online Casino Platform in Nepal - Safe Gaming Guide | GG9',
        description: 'Looking for the best online casino platform in Nepal? Read our complete guide to GG9, featuring real cash games, fast withdrawals, secure transactions, and mobile access.',
        canonicalUrl: 'https://casino.gg9npl.com/best-online-casino-platform-nepal',
        ogType: 'article',
        ogUrl: 'https://casino.gg9npl.com/best-online-casino-platform-nepal',
        ogTitle: 'Best Online Casino Platform in Nepal - Safe Gaming Guide',
        ogDescription: 'Discover why GG9 is the top choice for Nepal players. Review mobile compatibility, slot games, security, and quick withdrawals.',
        ogImage: 'https://casino.gg9npl.com/assets/images/casino-platform.png',
        twitterUrl: 'https://casino.gg9npl.com/best-online-casino-platform-nepal',
        twitterTitle: 'Best Online Casino Platform in Nepal - Safe Gaming Guide',
        twitterDescription: 'Complete guide to secure real cash online gaming and mobile casino experience in Nepal.',
        twitterImage: 'https://casino.gg9npl.com/assets/images/casino-platform.png',
        activePage: 'blog',
        schemas: schemas
    });
});

// TODO(security): Add rate limiting and other secure headers using standard helmet library.

// Start the server
// Enforce localhost/127.0.0.1 for secure development/testing
app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
});
