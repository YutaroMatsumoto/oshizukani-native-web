import { supabase } from "@/lib/supabase";
import { signInWithIdToken } from "@/usecase/signin";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export function Auth() {
  // TODO: 環境変数へ置き換え
  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    // webClientId:
    //   "990330236231-k392uo8qddk33d5d9a18642vl2jrsdrs.apps.googleusercontent.com",
    iosClientId:
      "321678574125-6umo2fv1dn1sttfcpit9ocudvgp2dm94.apps.googleusercontent.com",
  });

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("useEffectの中", { session });
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  console.log({ session });

  return (
    <GoogleSigninButton
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={() => signInWithIdToken(GoogleSignin)}
    />
  );
}
