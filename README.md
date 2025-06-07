
# SPADev1 – Single Page Application for Educational Content

**SPADev1** is a responsive Single Page Application (SPA) built with React, designed for managing and displaying educational courses and programming articles. The application offers functionalities such as adding, editing, and deleting articles. Access to the user panel is restricted to authenticated users, ensuring secure content management.

## 🔗 Live Demo

Experience the live application here: [https://spa-dev1.vercel.app](https://spa-dev1.vercel.app)

## 🚀 Features

- **User Authentication**: Secure login system to access the user panel.
- **Article Management**: Create, read, update, and delete articles seamlessly.
- **Responsive Design**: Optimized for various devices using React Bootstrap.
- **Dynamic Navigation**: Hamburger menu for smaller screens, enhancing user experience.
- **Data Handling**: Initially utilized `json-server` for mock data; transitioned to a custom backend for deployment stability.

## 🛠️ Technologies Used

- **Frontend**:
  - React
  - React Bootstrap
  - Vite
- **Backend**:
  - Custom server replacing `json-server` for reliable data fetching
- **Deployment**:
  - Vercel

## 📁 Project Structure

The project is organized as follows:

```
SPADev1/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── ArticleCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── PrivateRoute.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── data/
│   │   └── courses.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── AddArticle.jsx
│   │   ├── Dashboard.jsx
│   │   ├── EditArticle.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── NotFound.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 📦 Getting Started

To run the project locally:

1. **Clone the repository**:

```bash
git clone https://github.com/Amirksr/SPADev1.git
cd SPADev1
```

2. **Install dependencies**:

```bash
npm install
```

3. **Start the development server**:

```bash
npm run dev
```

4. **Access the application**:

Open your browser and navigate to `http://localhost:5173`

## 🔐 Authentication

The application includes a login system to restrict access to the user panel. Ensure you have the necessary credentials to log in.these usernames & passwords to test login:
user: amir & pass: 123456
user: milad & pass: 12345

## 📄 License

This project is licensed under the [MIT License](LICENSE).
