import { useRouter } from "next/router";
import { useEffect } from "react";
import { useFormikContext } from "formik";

function checkFormIsEmpty(values) {
  return true;
}

function saveFormDraft({ values, formId }) {
  console.log(`SAVE form ${formId}`, values);
  localStorage.setItem(formId, JSON.stringify(values));
}

export default function FormDraft({ draft }) {
  const router = useRouter();
  const { values, submitCount, isSubmitting } = useFormikContext();

  useEffect(() => {
    function handleRouteChange() {
      if (submitCount === 0 || (!isSubmitting && !checkFormIsEmpty(values))) {
        saveFormDraft({ values, formId: draft.id });
      }
    }
    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router.events, submitCount, isSubmitting, values, draft?.id]);

  return null; // make react happy
}
