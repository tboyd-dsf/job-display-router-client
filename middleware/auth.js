export default function ({store, redirect}) {
    if (store.state.user.currentUser.email === '') {
        return redirect('/')
    }
}