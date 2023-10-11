"use client";

import FormDraft from "@/src/components/formDraft";
import { Formik, Field, Form } from "formik";
import Link from "next/link";
import { useEffect, useState } from "react";
const formId = "demoForm";

export default function FormPage() {
  const [initialValues, setInitialValues] = useState({
    toggle: false,
    checked: []
  });

  useEffect(() => {
    const values = JSON.parse(localStorage?.getItem(formId) || "{}");
    setInitialValues(values);
  }, []);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/form">Form</Link>
          </li>
        </ul>
      </nav>
      <main className="container px-5 py-3">
        <div>
          <h1>Sign Up</h1>
          <Formik
            initialValues={initialValues}
            enableReinitialize
            onSubmit={async (values) => {
              console.log(values);
            }}
          >
            {({ values }) => (
              <>
                <FormDraft
                  draft={{
                    id: formId
                  }}
                />
                <Form id={formId}>
                  <label htmlFor="toggle">
                    <Field type="checkbox" name="toggle" />
                    {`${values.toggle}`}
                  </label>

                  <div id="checkbox-group">Checked</div>
                  <div role="group" aria-labelledby="checkbox-group">
                    <label>
                      <Field type="checkbox" name="checked" value="One" />
                      One
                    </label>
                    <label>
                      <Field type="checkbox" name="checked" value="Two" />
                      Two
                    </label>
                    <label>
                      <Field type="checkbox" name="checked" value="Three" />
                      Three
                    </label>
                  </div>
                  <label htmlFor="name">
                    <Field type="text" name="name" placeHolder="your name" />
                  </label>
                  <br />
                  <label htmlFor="email">
                    <Field type="email" name="email" placeHolder="your email" />
                  </label>
                  <br />

                  <button type="submit">Submit</button>
                </Form>
              </>
            )}
          </Formik>
        </div>
      </main>
    </>
  );
}
