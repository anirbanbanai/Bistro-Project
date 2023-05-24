import Cover from "../Menu/Cover";
import contactPic from '../../assets/contact/banner.jpg'
import SectionTitle from "../SectionTitle";
import Location from "./Location";
import Form from "./Form";

const ContactCover = () => {
    return (
        <div>
            <Cover img={contactPic} title={"Contact Us"}></Cover>
            <div>
                <SectionTitle
                subHeading={"Visit Us"}
                heading={"Our LOcation"}
                ></SectionTitle>

            </div>
            <Location></Location>
            <div>
                <SectionTitle
                subHeading={"Send us a message"}
                heading={"Contact Form"}
                ></SectionTitle>
                <Form></Form>
            </div>
        </div>
    );
};

export default ContactCover;