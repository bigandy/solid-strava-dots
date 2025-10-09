import { createUniqueId } from "solid-js";

import styles from "./styles.module.css";

export const DotWithPopover = ({ title = "Popover Title", content = `Popover content
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aspernatur labore veritatis ex doloremque, aperiam porro soluta. Optio libero aliquid repellat atque neque in, error, natus corporis vel fuga nam?`, link = 'https://google.com' }) => {
    const id = createUniqueId();

    return (
        <div class={styles.wrapper}
            style={{
                '--anchor-name': `ank-${id}`
            }}>
            <button popoverTarget={id} class={`${styles.dot} dot`} >
                <span class="vh">Open popoover</span>
            </button>
            <div popover class={styles.popover} id={id}>
                <button popoverTarget={id}>x
                    <div class="vh">close</div>
                </button>
                <h2>{title}</h2>
                <p>{content}</p>

                <a href={link}>Link</a>
            </div>
        </div>
    )
}