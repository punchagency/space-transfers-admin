import { FiMail, FiPhone, FiMapPin, FiImage } from 'react-icons/fi';

export const OrderSummary = () => {
    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>

            {/* Customer Info */}
            <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">
                    Customer Information
                </h3>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                        <FiMail className="w-4 h-4" />
                        <span>john.smith@email.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                        <FiPhone className="w-4 h-4" />
                        <span>+1 (555) 123-4567</span>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-100 my-6"></div>

            {/* Shipping Address */}
            <div className="mb-8">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        Shipping Address
                    </h3>
                    <span className="text-blue-600 text-sm font-medium bg-blue-50 px-2 py-1 rounded">
                        Region: West
                    </span>
                </div>
                <div className="flex items-start gap-3 text-gray-600">
                    <FiMapPin className="w-4 h-4 mt-1 shrink-0" />
                    <div>
                        <p>1234 Main Street</p>
                        <p>Los Angeles, CA 90001</p>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-100 my-6"></div>

            {/* Items Ordered */}
            <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">
                    Items Ordered
                </h3>
                <div className="space-y-4">
                    {/* Item 1 */}
                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                        <div className="w-12 h-12 bg-white rounded border border-gray-200 flex items-center justify-center text-gray-400">
                            <FiImage className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-medium text-gray-900">Astronaut Sticker</p>
                            <p className="text-sm text-gray-500">Size: L</p>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                        <div className="w-12 h-12 bg-white rounded border border-gray-200 flex items-center justify-center text-gray-400">
                            <FiImage className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-medium text-gray-900">Hoodie - Black</p>
                            <p className="text-sm text-gray-500">Size: XL</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-100 my-6"></div>

            {/* Gang Sheet Preview */}
            <div>
                <h3 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">
                    Gang Sheet Preview
                </h3>
                <div className="w-full aspect-video border-2 border-red-200 rounded-lg bg-[url('https://placehold.co/600x400/transparent/transparent')] relative bg-slate-50 overflow-hidden">
                    {/* Checkerboard pattern simulation */}
                    <div className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%), linear-gradient(-45deg, #000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000 75%), linear-gradient(-45deg, transparent 75%, #000 75%)`,
                            backgroundSize: '20px 20px',
                            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                        }}
                    ></div>
                    {/* Mock stickers */}
                    <div className="absolute top-10 left-10 w-16 h-16">
                        <img src="https://api.iconify.design/lucide:rocket.svg?color=%231d4ed8" alt="sticker" className="w-full h-full" />
                    </div>
                    <div className="absolute top-10 left-32 w-16 h-16">
                        <img src="https://api.iconify.design/lucide:rocket.svg?color=%231d4ed8" alt="sticker" className="w-full h-full transform scale-x-[-1]" />
                    </div>
                </div>
            </div>

        </div>
    );
};
