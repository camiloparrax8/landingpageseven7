"use client";

import { forwardRef, useImperativeHandle, useRef, useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export interface ContactRecaptchaRef {
  reset: () => void;
}

interface ContactRecaptchaProps {
  siteKey: string;
  onChange: (token: string | null) => void;
  onExpired?: () => void;
}

export const ContactRecaptcha = forwardRef<ContactRecaptchaRef, ContactRecaptchaProps>(
  function ContactRecaptcha({ siteKey, onChange, onExpired }, ref) {
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);

    useImperativeHandle(ref, () => ({
      reset: () => {
        recaptchaRef.current?.reset();
      },
    }));

    const setRef = useCallback((node: ReCAPTCHA | null) => {
      recaptchaRef.current = node;
    }, []);

    return (
      <ReCAPTCHA
        ref={setRef}
        sitekey={siteKey}
        theme="light"
        onChange={onChange}
        onExpired={onExpired}
      />
    );
  }
);
