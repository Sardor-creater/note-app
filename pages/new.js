import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Button, Form, Loader } from "semantic-ui-react";

const NewNote = () => {
	const [form, setForm] = useState({ title: "", description: "" });
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState({});

	const router = useRouter();

	return (
		<div className="form-container">
			<h1>Create Note</h1>
		</div>
	);
};
