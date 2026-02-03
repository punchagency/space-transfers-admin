import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

interface OrderHeaderProps {
    orderId: string;
}

export const OrderHeader = ({ orderId }: OrderHeaderProps) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-4 sticky top-0 bg-gray-50 z-10 -mt-6 -mx-6 px-6 pt-6 pb-4">
            <button
                onClick={() => navigate('/dashboard')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 w-fit"
            >
                <FiArrowLeft />
                <span className="font-medium">Back</span>
            </button>
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Order #{orderId}</h1>
                <p className="text-gray-500">View and manage order details</p>
            </div>
        </div>
    );
};
