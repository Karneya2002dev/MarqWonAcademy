import * as React from "react";
import clsx from "clsx";

function Card({ className, ...props }) {
  return (
    <div
      className={clsx("rounded-2xl border bg-white shadow p-4", className)}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return (
    <div className={clsx("mb-2 font-bold text-lg", className)} {...props} />
  );
}

function CardTitle({ className, ...props }) {
  return (
    <h3 className={clsx("text-xl font-semibold", className)} {...props} />
  );
}

function CardContent({ className, ...props }) {
  return (
    <div className={clsx("text-gray-700", className)} {...props} />
  );
}

export { Card, CardHeader, CardTitle, CardContent };
