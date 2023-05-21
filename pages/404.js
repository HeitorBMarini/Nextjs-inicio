import Link from '../src/components/Link';

export default function Page404() {
    return (
        <div>
            <h1 style={{ color: 'red' }}>Você se perdeu e caiu na página 404, IT´S A TRAAAP :O</h1>
            <Link href="/" className="link-home">
                Ir para a home
            </Link>
            <style jsx>{`
                .link-home {
                   margin-top: 10rem;
                    
                }
            `}</style>
        </div>
    );
}
