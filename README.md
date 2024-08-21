# IT Mokymai

Teorija, pavyzdžiai, užduotys.

## Projekto pasiruošimas darbui

Norint parsisiųsti projekto kodą naudokite komandą:

```bash
git clone https://github.com/blokugrandine/it-mokymai.git
```

Norint pereiti į gautą aplanką:

```bash
cd it-mokymai
```

Norint įrašyti reikalingas bibliotekas darbui:

```bash
npm install
```

## Projekto paleidimas

Norint paleisti projektą lokaliai, kad jame ką nors atnaujinti:

```bash
npm run dev
```

Norint paruošti projektą talpinimui:

```bash
npm run build
```

## Projekto staging

```bash
git checkout staging
```

```bash
git add .
```

```bash
git commit -m "staging"
```

```bash
git subtree push --prefix docs/.vuepress/dist origin staging
```
