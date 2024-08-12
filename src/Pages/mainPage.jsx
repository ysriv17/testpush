import Button from "../components/Button/Button.jsx";
import "react-international-phone/style.css";
import image1 from "../Assets/images/mainPage.jpeg"
import image2 from "../Assets/images/mainPage2.jpeg"
import Dropdown from "../components/Dropdown/Dropdown";
import { useState } from "react";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import InputField from "../Components/Input/Input";
import { PhoneInput } from "react-international-phone";
import ImageSlider from "../Components/ImageSlider/Imageslider";
import PhoneNumber from "../Components/phoneNumber/PhoneNumber";
const MainPage = () => {
    const [sourceValue, setSourceValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const images = [
        image1,
        image2
    ];
    const handleMainPageFormAPI = async (name, email, message) => {
        setIsLoading(true);
        try {
            const response = await axios.post("/user/contactus", {
                name: name,
                email: email,
                message: message,
                source: sourceValue.title,
            });

            if (response?.data?.success) {
                console.log(response.data, "get in touch success response");
                toast.success(response?.data?.message);
                setIsLoading(false);
            }
        } catch (err) {
            console.log(err);
            toast.error(err?.response?.data?.message);
            setIsLoading(false);
        }
    };

    return (
        <>

            <div className="w-full h-full flex items-center relative ">

                <div className="bg-white sm:bg-white w-full sm:w-[60%] xl:w-[80%] h-full ">

                    <div className="sm:w-[65%] xl:w-[50%] 2xl:w-[45%] 3xl:w-[40%] 5xl:w-[35%] 6xl:w-[53%] h-full flex flex-col justify-center  mx-5 xs:mx-10 sm:mx-0 sm:ml-10 xl:ml-32 4xl:ml-40 pb-8 xl:pb-16">
                        <div className=" text-xl font-black ">
                            Select The Cateogry ?
                            <Dropdown
                                title="How did you find us?"
                                menuItems={[
                                    { id: "RealEState", title: "Real EState" },
                                    { id: "University", title: "University" },
                                ]}
                                tooltip={true}
                                handleSelectValue={(source) => setSourceValue(source)}
                                selectedValue={sourceValue}
                                extraClass={`text-base sm:text-sm px-3 py-2 6xl:p-5 text-gray-400
                                    }`}
                                iconColor="text-black"
                            //error={error?.["category"] && error?.["category"]}
                            />
                        </div>
                        <h1 className="text-[30px] sm:text-[36px] lg:text-[42px] xl:text-[50px] 6xl:text-[85px] font-bold text-black">
                            REAL <span className="text-ternary-blue"> ESTATE</span>
                        </h1>
                        <p className="my-3 6xl:mb-7 text-sm 6xl:text-4xl 6xl:leading-[3.5rem] text-black font-medium">
                            Stop thinking and start comparing
                        </p>
                        <Formik
                            initialValues={{
                                Name: "",
                                Email: "",
                                PhoneNumber: "",
                                Nationality: "",
                                University: "",
                            }}
                            validationSchema={Yup.object({
                                Name: Yup.string().required("Name is Required"),
                                Email: Yup.string()
                                    .email("Invalid email address")
                                    .required("Email is Required"),
                                PhoneNumber: Yup.number().required("Phone Number is Required"),
                                Nationality: Yup.string().required("Nationality is Required"),
                                University: Yup.string().required("University is Requiredd")
                            })}
                            enableReinitialize={true}
                            onSubmit={async (values, { setSubmitting, resetForm }) => {
                                const { name, email, message } = values;
                                handleMainPageFormAPI(name, email, message);
                                setSubmitting(false);
                                setSourceValue("");
                                resetForm();
                            }}
                        >
                            {(formik) => {
                                return (
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="flex flex-col space-y-5 6xl:space-y-10 my-3">
                                            <InputField

                                                type="text"
                                                name="Name"
                                                id="Name"
                                                placeholder="Name"
                                                extraClass={`${formik.touched.Name && formik.errors.Name
                                                    ? "border border-red-400"
                                                    : "border border-ternary-gray "
                                                    } px-3 py-2 6xl:p-5`}
                                                inputFieldClass="text-base sm:placeholder:text-sm 6xl:placeholder:text-3xl text-base sm:text-sm 6xl:text-3xl font-normal text-black"
                                                error={formik.touched.Name && formik.errors.Name}
                                                {...formik.getFieldProps("Name")}
                                                tooltip={true}
                                                tooltipmessage={"Enter Your Name Here"}
                                                lable={true}
                                                lablecontent={"NAME"}
                                                lableclass={"font-semibold"}
                                            />

                                            <InputField
                                                type="text"
                                                name="Email"
                                                id="email"
                                                placeholder="Email"
                                                extraClass={`${formik.touched.email && formik.errors.email
                                                    ? "border border-red-400"
                                                    : "border border-ternary-gray "
                                                    } px-3 py-2 6xl:p-5`}
                                                inputFieldClass="text-base sm:placeholder:text-sm 6xl:placeholder:text-3xl text-base sm:text-sm 6xl:text-3xl font-normal text-black"
                                                error={formik.touched.email && formik.errors.email}
                                                {...formik.getFieldProps("email")}
                                                tooltip={true}
                                                tooltipmessage={"Enter A Vaild Email Here"}
                                                lable={true}
                                                lablecontent={"Email"}
                                                lableclass={"font-semibold"}
                                            />
                                            <PhoneNumber
                                                name="Phone Number"
                                                defaultCountry="ua"
                                                value={formik.initialValues.PhoneNumber}
                                                onChange={formik.handleChange}
                                                lableid={"Phone Number"}
                                                tooltip={true}
                                                tooltipmessage={"Enter Your Phone NUmber Here"}
                                                inputClassName={"w-full"}
                                                style={{ width: "100%" }}
                                                lable={true}
                                                lableclass={"font-semibold"}

                                            />
                                            <InputField
                                                type="text"
                                                name="Nationality"
                                                id="Nationality"
                                                placeholder="Nationality"
                                                extraClass={`${formik.touched.Nationality && formik.errors.Nationality
                                                    ? "border border-red-400"
                                                    : "border border-ternary-gray "
                                                    } px-3 py-2 6xl:p-5`}
                                                inputFieldClass="text-base sm:placeholder:text-sm 6xl:placeholder:text-3xl text-base sm:text-sm 6xl:text-3xl font-normal text-black"
                                                error={formik.touched.Nationality && formik.errors.Nationality}
                                                {...formik.getFieldProps("Nationality")}
                                                tooltip={true}
                                                tooltipmessage={"Enter Your Nationality Here."}
                                                lable={true}
                                                lablecontent={"Nationality"}
                                                lableclass={"font-semibold"}
                                            />
                                            <InputField
                                                type="text"
                                                name="University"
                                                id="University"
                                                placeholder="University"
                                                extraClass={`${formik.touched.University && formik.errors.University
                                                    ? "border border-red-400"
                                                    : "border border-ternary-gray "
                                                    } px-3 py-2 6xl:p-5`}
                                                inputFieldClass="text-base sm:placeholder:text-sm 6xl:placeholder:text-3xl text-base sm:text-sm 6xl:text-3xl font-normal text-black"
                                                error={formik.touched.University && formik.errors.University}
                                                {...formik.getFieldProps("University")}
                                                tooltip={true}
                                                tooltipmessage={"Enter A Vaild University"}
                                                lable={true}
                                                lablecontent={"University"}
                                                lableclass={"font-semibold"}
                                            />

                                            <div className="w-full">
                                                <Button
                                                    type="submit"
                                                    isLoading={isLoading}
                                                    disabled={isLoading}
                                                    innerText="SEND"
                                                    extraClass="text-center w-full text-black bg-ternary-blue text-base 6xl:text-4xl font-semibold tracking-wider py-2.5 6xl:py-5"
                                                />
                                            </div>


                                        </div>
                                    </form>
                                );
                            }}
                        </Formik>
                    </div>
                </div>
                <div className="bg-secondary-blue sm:w-[40%] xl:w-[25%] 4xl:w-[30%] 5xl:w-[25%] h-[100vh] hidden sm:inline-flex flex-col justify-center">
                  
                    <ImageSlider
                        images={images}
                        className={"absolute left-[52%] xs:left-[52%] md:left-[55%] xl:left-[60%] 4xl:left-[60%] 5xl:left-[65%] sm:max-w-[300px] md:max-w-[300px] lg:min-w-[400px] 4xl:min-w-[450px] 6xl:min-w-[800px] max-h-[700px] 6xl:max-h-none "} />
                </div>
            </div>
        </>
    );


};

export default MainPage;
