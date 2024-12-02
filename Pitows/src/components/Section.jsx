import React from "react";

const Section = ({ title, content, content_right, img_path }) => {
    return (
        <section className="sob-medida">
            <div className="container">
                {content_right ? (<>
                    <div className="image-section">
                    <img src={img_path} alt="" />
                    </div>
                    <div className="text-section">
                    <h2>{title}</h2>
                    <p>
                        {content}
                    </p>
                    </div>
                </>) : (
                    <>
                    <div className="text-section">
                    <h2>{title}</h2>
                    <p>
                        {content}
                    </p>
                    </div>
                    <div className="image-section">
                    <img src={img_path} alt="" />
                    </div>
                    </>
                ) }
            </div>
        </section>
    )
};

export default Section;