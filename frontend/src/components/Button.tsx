interface ButtonProps{
    Classname : string,
    text : string
}

export function Button({Classname , text}: ButtonProps){
    return(
        <button className={Classname}>
             {text}
         </button>
    )
}





