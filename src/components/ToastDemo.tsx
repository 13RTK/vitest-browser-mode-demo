import toast from 'react-hot-toast';

const ToastDemo = () => {
	return (
		<button type="button" onClick={() => toast.success('Success')}>
			Show Toast
		</button>
	);
};

export default ToastDemo;
