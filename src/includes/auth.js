import { reactive } from "vue";
import { supabase } from "../supabase";

const state = reactive({
  user: null,
  session: null,
  error: null,
});

const authenticate = async () => {
  try {
    const { user, session, error } = await supabase.auth.session();
    if (error) throw error;
    state.user = user;
    state.session = session;
  } catch (error) {
    state.error = error;
  }
};

const signIn = async (email, password) => {
  try {
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    state.user = user;
  } catch (error) {
    state.error = error;
  }
};

const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    state.user = null;
    state.session = null;
  } catch (error) {
    state.error = error;
  }
};

const auth = {
  state,
  authenticate,
  signIn,
  signOut,
};

export default auth;
