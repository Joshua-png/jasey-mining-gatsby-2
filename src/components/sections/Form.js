import React from 'react';
import logo from '../../images/logo.jpg';
import { FaUserAlt,FaBook } from 'react-icons/fa';

export default function Form(){
    return(
        <section className="container-fluid  py-5" style={{height:'100%', backgroundColor:'#ebfaeb'}}>
            <div className="container">
                <div className="card mb-3 border border-success">
                    <div className="row no-gutters ">
                        <div className="col-md-6 my-auto py-auto" style={{backgroundColor:'#04ba32'}}>
                            <div className="my-auto text-center" style={{height:'624.667px'}}>
                            <img src={logo} className="mt-5 mb-3" alt="logo1" />
                            <p className="card-text h2 text-white text-center" style={{verticalAlign:'middle'}}>For enquiries <br />please get in touch</p><br />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <form className="" action="index.html" method="post">
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Full Name</label>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                            <div className="input-group-text"><FaUserAlt /></div>
                                            </div>
                                            <input type="text" className="form-control border border-success"  id="formGroupExampleInput" />
                                        </div>
                                    </div>
    
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <div className="input-group mb-3 ">
                                            <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">@</span>
                                            </div>
                                            <input type="email" className="form-control border border-success" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>
    
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Subject</label>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1"><FaBook  /></span>
                                            </div>
                                            <input type="text" className="form-control border border-success"  id="formGroupExampleInput2" />
                                        </div>
                                    </div>
    
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea name="name" rows="8" cols="50" id="message" className="form-control border border-success" placeholder="Write your questions and enquiries here"></textarea>
                                    </div>
                                    <input type="submit" className="btn text-white" style={{backgroundColor:'#04ba32'}} name="" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}