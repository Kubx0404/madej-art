import clipboard from "clipboardy";
import { toast } from "react-toastify";

function copyDiscordTag() {
  clipboard.write("Kubx0404#6926");
  toast("Skopiowano! Kubx0404#6926", {
    progressStyle: { background: "#ababab", Color: "#494b50" },
  });
}

export { copyDiscordTag };
