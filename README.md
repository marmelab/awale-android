<table>
        <tr>
            <td><img width="120" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/rocket.svg" alt="onboarding" /></td>
            <td><strong>Archived Repository</strong><br />
            The code of this repository was written during a <a href="https://marmelab.com/blog/2018/09/05/agile-integration.html">Marmelab agile integration</a>. It illustrates the efforts of a new hiree, who had to implement a board game in several languages and platforms as part of his initial learning. Some of these efforts end up in failure, but failure is part of our learning process, so the code remains publicly visible.<br />
        <strong>This code is not intended to be used in production, and is not maintained.</strong>
        </td>
        </tr>
</table>

# awale-android

Turn based [Awale](https://fr.wikipedia.org/wiki/Awal%C3%A9) game for Android using [React Native](https://facebook.github.io/react-native/)

## Install and run

```
make install
make start-server
make run
```

You need to change the url API in `config.js`. If you use Android emulator, use the IP adress `10.0.2.2`. You can read more from [android documentation](https://developer.android.com/studio/run/emulator-commandline.html#networkaddresses).

## Player vs IA

You can download this project [Awale on Golang](https://github.com/marmelab/awale-go) et launch `make run-webserver`.


## Render

Look inside assets directory if you want to see other pictures.

![Board](../master/assets/bard.png?raw=true)
