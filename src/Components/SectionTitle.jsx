
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center w-3/12 my-8 mx-auto">
            <p className="text-yellow-600">----{subHeading}----</p>
            <p className="text-4xl uppercase border-y-4 py-4">{heading}</p>
        </div>
    );
};

export default SectionTitle;