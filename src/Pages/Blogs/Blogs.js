import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs');
    return (
        <div data-aos="fade-up" data-aos-duration="2000">
            <section className="dark:bg-gray-100 dark:text-gray-900">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 dark:text-gray-500">This page includes a series of questions</p>
                    <div className="space-y-4 text-start">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none text-black font-bold text-lg">Difference between SQL and NoSQL?</summary>
                            <div className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                <p className='my-3 text-gray-900 font-semibold'>SQL (Structured Query Language)</p>
                                A SQL Database follows a table like structure which can have an
                                unlimited number of rows and every data present inside the database
                                is properly structured with Predefined Schemas, it is basically used
                                to manipulate Relational Databases Management Systems.

                                <br />
                                <p className='my-3 text-gray-900 font-semibold'>No SQL (Not only SQL)</p>

                                A NoSQL Database is a Distributed Database where the data is very
                                unstructured with Dynamic Schema. Unlike SQL it cannot have unlimited
                                rows but it follows a Standard Schema Definition and can store all
                                sorts of data models with large distributed data in the form of
                                key-value pairs, graph databases, documents or wide-column stores.
                            </div>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none text-black font-bold text-lg">What is JWT, and how does it work?</summary>
                            <div className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)

                                <p className='my-3 text-gray-900 font-semibold'>Working Procedure -</p>
                                Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
                                <ul className='list-decimal ml-8 my-3'>
                                    <li>User sign-in using username and password or google/facebook.</li>
                                    <li>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</li>
                                    <li>User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</li>
                                    <li>Resource server then verifies the authenticity of the token using the secret salt/ public key.</li>
                                </ul>
                            </div>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none text-black font-bold text-lg">What is the difference between javascript and NodeJS?</summary>
                            <div className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                <ul className='list-disc ml-8'>
                                    <li>JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.</li>
                                    <li>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</li>
                                    <li>Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.</li>
                                    <li>JavaScript most commonly used on client-side servers. On the other hand, Node JS mainly used on the server side</li>
                                </ul>
                            </div>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none text-black font-bold text-lg">How does NodeJS handle multiple requests at the same time?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;