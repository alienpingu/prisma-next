import styles from '../../styles/Login.module.css'
import Link from 'next/link'

export default function Register(props) {
	return(<div className="mt-5 row justify-content-center">
			<h1 className="text-center">Register</h1>
			<form className={styles.form}>
				<div className="row mb-3">
					<div className="col col-md-6">
						<label htmlFor="exampleInputSurname1" className="form-label">Surname</label>
					    <input type="email" className="form-control" id="exampleInputSurname1" aria-describedby="surnameHelp"/>
					</div>
					<div className="col col-md-6">
						<label htmlFor="exampleInputName1" className="form-label">Name</label>
					    <input type="email" className="form-control" id="exampleInputName1" aria-describedby="nameHelp"/>
					</div>
				</div>
			  <div className="mb-3">
			    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
			    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
			    <div id="emailHelp" className="form-text">We&apos;ll never share your email with anyone else.</div>
			  </div>
			  <div className="mb-3">
			    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
			    <input type="password" className="form-control" id="exampleInputPassword1"/>
			  </div>
			  <div className="mb-3 form-check">
			    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
			    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
			  </div>
			  <button type="submit" className="btn btn-primary">Submit</button>
			</form>
			<Link  href="/login">
	          <a className="text-center mt-3">Go to login</a>
	        </Link>
		</div>)
}