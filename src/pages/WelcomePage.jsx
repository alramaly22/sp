import React from "react";
import { useNavigate } from "react-router-dom"; // للتنقل بين الصفحات
import "./../style/WelcomePage.css"; // تأكد من إضافة ملف CSS مخصص للتنسيق

const WelcomePage = () => {
    const navigate = useNavigate(); // للتحكم في التنقل

    const handleStartTest = () => {
        navigate("/homepage"); // ينتقل إلى صفحة HomePage
    };

    return (
        <div className="welcome-container">
            {/* الخلفية */}
            {/* <div className="welcome-background">
                <img src="src/assets/89.jpg" alt="Background" className="background-img" />
            </div> */}

            {/* المحتوى */}
            <div className="welcome-content">
                <h1 className="welcome-title">مرحبًا بك، {"اسم المستخدم"}</h1>
                <p className="welcome-description">
                    مرحبًا بكم في منصتنا الرائدة التي تجمع بين الإبداع والتميز! نحن هنا لنكون
                    شريككم الأمثل في تحقيق أحلامكم وأهدافكم. نسعى لتقديم تجربة فريدة
                    تركز على الجودة.
                </p>
                <button className="start-button" onClick={handleStartTest}>
                    ابدأ الاختبار
                </button>
            </div>
            <div class="welcome-image">
                <img src="src/assets/Vector.png" alt="Welcome" className="imgwelcome"   />
            </div>
        </div>
    );
};

export default WelcomePage;
