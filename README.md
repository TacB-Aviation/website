<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <style>
        /* Global Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #007bff, #6610f2);
            color: #fff;
        }

        header {
            text-align: center;
            margin-bottom: 2rem;
        }

        header h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        header p {
            font-size: 1.2rem;
            opacity: 0.8;
        }

        .cta {
            margin-top: 2rem;
        }

        .cta a {
            text-decoration: none;
            color: #fff;
            background-color: #28a745;
            padding: 0.8rem 1.5rem;
            border-radius: 5px;
            transition: background-color 0.3s ease;
            font-size: 1rem;
        }

        .cta a:hover {
            background-color: #218838;
        }

        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            width: 90%;
            max-width: 1200px;
            margin: 3rem 0;
        }

        .feature {
            background: rgba(255, 255, 255, 0.1);
            padding: 2rem;
            border-radius: 10px;
            text-align: center;
        }

        .feature h3 {
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }

        .feature p {
            opacity: 0.9;
        }

        footer {
            margin-top: auto;
            text-align: center;
            padding: 1rem;
            background-color: rgba(0, 0, 0, 0.2);
            width: 100%;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to Your Website</h1>
        <p>The best place to achieve your goals</p>
    </header>

    <div class="cta">
        <a href="#features">Get Started</a>
    </div>

    <section class="features" id="features">
        <div class="feature">
            <h3>Feature One</h3>
            <p>Discover amazing benefits and features that elevate your experience.</p>
        </div>
        <div class="feature">
            <h3>Feature Two</h3>
            <p>Experience seamless integration with our cutting-edge tools.</p>
        </div>
        <div class="feature">
            <h3>Feature Three</h3>
            <p>Connect with a community of innovators and achievers.</p>
        </div>
    </section>

    <footer>
        <p>&copy; 2025 Your Website Name. All rights reserved.</p>
    </footer>
</body>
</html>
