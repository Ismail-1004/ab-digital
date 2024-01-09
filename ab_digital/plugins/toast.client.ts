import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

type ToastTypes = "success" | "error" | "info";

function toast(type: ToastTypes, text: string) {
  let gradient = "linear-gradient(135deg, #73a5ff, #5477f5)";
  if (type === "success") {
    gradient = "linear-gradient(to right, #4caf50, #81c784)"
  } else if (type === "error") {
    gradient = "linear-gradient(to right, #f44336, #e53935)"
  }

  Toastify({
    text,
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: gradient,
    }
  }).showToast();
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      toast
    }
  }
})

declare module "#app" {
  interface NuxtApp {
    $toast: typeof toast
  }
}