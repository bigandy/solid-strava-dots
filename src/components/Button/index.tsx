import type { ParentComponent } from "solid-js";

interface Props {
	onClick: () => void;
	primary?: boolean;
	secondary?: boolean;
	disabled?: boolean;
}

import styles from "./styles.module.css";

const Button: ParentComponent<Props> = (props) => {
	return (
		<button {...props} class={`${styles.host}`} disabled={props.disabled}>
			{props.children}
		</button>
	);
};

export default Button;
