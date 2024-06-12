export function Show({
	when,
	children,
}: {
	when: boolean;
	children: JSX.Element;
}): JSX.Element {
	if (!when) {
		return <>{null}</>;
	}
	return <>{children}</>;
}
