export default function CustomButton(props) {
    return (
        <button
            className="w-[95%] h-[95%] text-black rounded-[5px] flex items-center justify-center border-[1px] border-gray-400 bg-white hover:bg-gray-200 active:bg-gray-300 shadow-md"
            onClick={() => props.val > -1 ? props.handleClick(props.val) : props.handleClick()}
        >
            {props.children}
        </button>
    )
}