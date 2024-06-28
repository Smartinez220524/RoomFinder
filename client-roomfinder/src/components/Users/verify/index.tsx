'use client';

import axios from "axios";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { patterns } from '@/utils/constants';
import { toast, Bounce, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from "@nextui-org/react";

export const VerifyComponent = ({ token }: { token: string }) => {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorSystem, setErrorSystem] = useState<string | null>(null);
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const response = await axios.get(`/api/users/recover/${token}`);
                setIsLoading(false);

                if (response.status === 200) {
                    toast.success(response.data.message.message, {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        theme: "colored",
                        transition: Slide,
                    });
                    //router.push('/users/login');
                } else {
                    setErrorSystem(response.data.message.message);
                }
            } catch (Error: string | any) {
                setErrorSystem(Error.response.data.message.message);
                //router.push('/users/login')
            } finally {
                setIsLoading(false);
            }
        };

        if (patterns.uuidv4.test(token)) {
            fetchData();
        }
        else {
            setIsLoading(false);
            setErrorSystem('Token inválido');
            router.push('/not-found');
        }
    }, [token, router]);

    // Errores
    useEffect(() => {
        if (errorSystem) {
            toast.error(errorSystem, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }
    }, [errorSystem]);


    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[100vh] lg:py-0">
            {isLoading ?
                <Spinner />
                :
                <h3> Cuenta Verificada</h3>
            }
        </div>
    );
};

export default VerifyComponent;