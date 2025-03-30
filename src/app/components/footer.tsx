import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
    return (
        <footer className="mt-8">
            <Card className="bg-gray-800 text-gray-200">
                <CardContent className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between">

                    <div className="mb-4 sm:mb-0">
                        <h2 className="text-xl font-bold">CÔNG TY TNHH MEU SOLUTIONS</h2>
                        <p className="text-sm">
                            <FontAwesomeIcon icon={faMapPin} /> Số 03 Sông Thao, Phường 2, Quận Tân Bình, TP. HCM
                        </p>
                        <p className="text-sm">
                            <FontAwesomeIcon icon={faPhone} />(+84) 2871099879
                        </p>
                        <p className="text-sm">
                            <FontAwesomeIcon icon={faGlobe} />{" "}
                            <a
                                href="https://meu-solutions.com/"
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://meu-solutions.com/
                            </a>
                        </p>
                    </div>

                    <div className="flex space-x-4">
                        <Button variant="link" className="text-gray-200 hover:text-white">
                            Trang chủ
                        </Button>
                        <Button variant="link" className="text-gray-200 hover:text-white">
                            Giới thiệu
                        </Button>
                        <Button variant="link" className="text-gray-200 hover:text-white">
                            Liên hệ
                        </Button>
                        <Button variant="link" className="text-gray-200 hover:text-white">
                            Chính sách
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </footer>
    );
}
