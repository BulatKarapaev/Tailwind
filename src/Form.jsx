import styles from "./core.module.scss"

function Form() {

    return(
        <div >
            <form className="bg-primary/15 p-10 rounded-lg border border-solid border-white">
                <h1 className="text-6xl font-bold mb-5"> Login</h1>


                <input className= {styles.field} type="text" placeholder="Email"/>
                <input className= {styles.field} type="password" placeholder="password"/>

                <button className=" dark:bg-white hidden sm:inline-block "> Нажми</button>
            </form>
        </div>
    )
}

export default Form;