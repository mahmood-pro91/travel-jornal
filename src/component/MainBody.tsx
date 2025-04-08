import './MainBody.css';

export default function MainBody (){
    const contentTips:string[] = [
        "React uses a virtual DOM to optimize rendering performance by minimizing actual DOM manipulations.",
        "Components are the building blocks of React applications, allowing for reusable UI elements.",
        "React follows a unidirectional data flow pattern, making application state more predictable.",
        "JSX is a syntax extension that allows you to write HTML-like code directly in your JavaScript."
    ];
    return(
        <main className='main-body'>
            <h2 className='head-main'>
                Fun Facts about React
            </h2>
            <ul className='list-main'>
                {
                    contentTips.map((item:string,index:number) => {
                        return <li key={index} className='list-main-item'>{item}</li>
                    })
                    
                }
                
            
            </ul>
        </main>
    )
}