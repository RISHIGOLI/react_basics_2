function Button(props)
{
    return(
        <div className="my-3">
            <button className='bg-red-400 text-white px-5 hover:bg-red-500 py-x rounded-full'>{(props.name)}</button>
        </div>
    );
}

export default Button;