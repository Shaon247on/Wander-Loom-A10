const Button = ({text, style }) => {
    return (
        <button className={`bg-[#00B5FF] text-center py-3 font-bold text-lg rounded-lg hover:rounded-3xl duration-[300ms] ${style}`}>{text}</button>
    );
};

export default Button;