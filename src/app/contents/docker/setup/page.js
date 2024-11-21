import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '@/components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '@/components/contents/CodeBox'
import CodeIn from '@/components/contents/CodeIn'
import LinkIn from '@/components/contents/LinkIn'
import ImageSet from '@/components/contents/ImageSet'
import image1 from "./image1.jpg"

export const data = {
    title: "Dockerの始め方",
    tag: ["Docker", "Ubuntu"],
    date: ["2024", "11", "18"],
    // latest: ["9999", "99", "99"]
}
export const metadata = {
    title: `${data.title} | きなこの部屋`
}

export default function test() {
    return (
        <>
            <Contents data={data}>
                <Section title="はじめに">
                    <Text>この記事ではOS上に仮想コンテナを作成するDockerについてまとめます。
                        実行環境はUbuntuを想定しています。</Text>
                </Section>
                <Section title="Dockerとは">
                    <Text>DockerとはベースとなるホストOS上に新しい仮想環境をコンテナとして作成します。
                        ホストOS上に新しい環境が乗っかっているような状態のためコンテナと呼ばれています。
                        Dockerで作成したコンテナはコマンドラインから自由に往来が可能で、
                        VScodeと連携すればファイル編集もホストOS上のファイルとそん色なく行えます。
                    </Text>
                    <Text>コンテナを作成するにはイメージと呼ばれる設計図が必要になります。
                        イメージを元にコンテナを作成し、コンテナを起動することでアクセスが可能になります。
                    </Text>
                </Section>
                <Section title="Dockerのインストール">
                    <Text>Dockerの公式ドキュメント
                        <a href="https://docs.docker.com/engine/install/ubuntu/" style={{ textDecoration: "underline", color: "#12BFEE", fontWeight: "normal" }}>(https://docs.docker.com/engine/install/ubuntu/)</a>
                        に従いUbuntu上にDockerをインストールします。</Text>
                    <Text>以下のコマンドを順に実行します。</Text>
                    <CodeBox lang="shell" comment="Dockerの公開鍵を追加">{`$ sudo apt update
$ sudo apt install
$ sudo install -m 0755 -d /etc/apt/keyrings
$ sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
$ sudo chmod a+r /etc/apt/keyrings/docker.asc
$ echo \\
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \\
    $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \\
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
$ sudo apt update`}</CodeBox>
                    <CodeBox lang="shell" comment="Dockerのインストール">{`$ sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`}</CodeBox>
                    <Text>Dockerのバージョンを確認します。正しくインストールされていれば表示されるはずです。</Text>
                    <CodeBox lang="shell" comment="バージョンの確認">{`$ sudo docker --version
Docker version 27.3.1, build ce12230`}</CodeBox>
                    <SubSection>権限の付与</SubSection>
                    <Text>インストール直後ではdockerコマンドを実行するには毎回管理者権限のsudoを要求する必要があります。
                        sudoなしでコマンド実行が出来るようにdockerの権限にログイン中のユーザーを追加します。
                    </Text>
                    <CodeBox lang="shell" comment="ユーザーの確認">{`$ echo $USER
user`}</CodeBox>
                    <CodeBox lang="shell" comment="権限の付与">{`$ sudo usermod -aG docker $USER
$ su - \${USER}`}</CodeBox>
                    <Text>再度dockerコマンドを利用してバージョンを確認します。今度はsudo無しでも実行できます。</Text>
                    <CodeBox lang="shell" comment="バージョンの再確認">{`$ docker --version
Docker version 27.3.1, build ce12230`}</CodeBox>
                </Section>
                <Section title="コンテナの管理">
                    <SubSection>imageの取得</SubSection>
                    <Text>コンテナを作成するには設計図となるimageが必要です。Dockerが提供しているクラウドサービスであるDocker Hub
                        <a href="https://hub.docker.com/?_fsi=1NyjBtTo" style={{ textDecoration: "underline", color: "#12BFEE", fontWeight: "normal" }}>(https://hub.docker.com/?_fsi=1NyjBtTo)</a>
                        では様々なimageが公開されています。
                    </Text>
                    <Text>DockerHubではオリジナルのimageの公開や共有も行えます。アカウントを作成して作業を行うのが一般的ですが、
                        公開されているimageを取得するだけならアカウントは必要ありません。
                    </Text>
                    <Text>今回はubuntuのimageを用いてコンテナを作成します。公開されているimageの取得にはpullコマンドを利用します。
                        コマンドはDocker Hubから確認できます。
                    </Text>
                    <ImageSet alt="Docker Hubの確認" height={300} width={700} image={image1} />
                    <Text>Docker Hubに従いコマンドを実行します。docker系のコマンドは基本的にどの階層のディレクトリで行っても問題ありません。</Text>
                    <CodeBox lang="shell" comment="imageのプル">{`$ docker pull ubuntu`}</CodeBox>
                    <Text>保存されているimageの確認は以下のコマンドで行います。</Text>
                    <CodeBox lang="shell" comment="imageの確認">{`$ docker image ls
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
ubuntu       latest    fec8bfd95b54   4 weeks ago   78.1MB`}</CodeBox>
                    <Text>プルを行ったubuntuのイメージが保存されています。</Text>
                    <SubSection>コンテナの起動</SubSection>
                    <Text>imageを元にコンテナを作成して起動します。コンテナの起動はrunコマンドで行います。</Text>
                    <CodeBox lang="shell" comment="コンテナの起動">{`$ docker run -it -d --name new_ubuntu ubuntu`}</CodeBox>
                    <Text>{`-it -d`}はコンテナ内のシェル設定オプションです。{`--name`}オプションの直後にコンテナの名前を設定し、最後に設計図となるimageを指定します。</Text>
                    <Text>psコマンドで起動中のコンテナを確認できます。</Text>
                    <CodeBox lang="shell" comment="起動中のコンテナの確認">{`$ docker container ls
CONTAINER ID   IMAGE     COMMAND       CREATED        STATUS         PORTS     NAMES
080ec8d841b6   ubuntu    "/bin/bash"   10 hours ago   Up 3 minutes             new_ubuntu`}</CodeBox>
                    <Text>新たに作製したnew_ubuntuが起動していることが分かります。</Text>
                    <SubSection>コンテナへのアクセス</SubSection>
                    <Text>以下のコマンドで起動中のコンテナに入ります。</Text>
                    <CodeBox lang="shell" comment="コンテナへのアクセス">{`$ docker exec -it new_ubuntu bash`}</CodeBox>
                    <Text>new_ubuntuというコンテナにbashでアクセスしています。
                        ubuntuのimageで作成したコンテナはデフォルトでrootユーザーでログインすることになります。
                    </Text>
                    <CodeBox lang="shell" comment="rootユーザーでログイン">{`root@080ec8d841b6:/#`}</CodeBox>
                    <Text>コンテナにアクセスすることでコマンドライン上からそのまま作業を開始することが出来ます。</Text>
                    <Text>コンテナからログアウトするにはコマンドラインでexitと記述します。</Text>
                    <CodeBox lang="shell" comment="コンテナからログアウト">{`root@080ec8d841b6:/home/ubuntu# exit
exit`}</CodeBox>
                    <SubSection>コンテナの停止と再起動</SubSection>
                    <Text>使用していないコンテナはstopコマンドで停止できます。</Text>
                    <CodeBox lang="shell" comment="コンテナの停止">{`$ docker stop new_ubuntu
new_ubuntu`}</CodeBox>
                    <Text>停止中のコンテナも含めて全てのコンテナを表示するには-aオプションを利用します。</Text>
                    <CodeBox lang="shell" comment="ls -a">{`$ docker container ls -a
CONTAINER ID   IMAGE     COMMAND       CREATED        STATUS                       PORTS     NAMES
080ec8d841b6   ubuntu    "/bin/bash"   10 hours ago   Exited (137) 7 seconds ago             new_ubuntu`}</CodeBox>
                    <Text>停止したコンテナはstartコマンドで再起動することで再度アクセスできます。</Text>
                    <CodeBox lang="shell" comment="コンテナの再起動と再ログイン">{`$ docker start new_ubuntu
new_ubuntu
$ docker exec -it new_ubuntu bash
root@080ec8d841b6:/#`}</CodeBox>
                    <SubSection>コンテナとimageの削除</SubSection>
                    <Text>コンテナを削除するにはrmコマンドを利用します。</Text>
                    <CodeBox lang="shell" comment="コンテナの削除">{`$ docker container rm new_ubuntu
new_ubuntu`}</CodeBox>
                    <Text>imageの削除も同様にrmコマンドを利用します。</Text>
                    <CodeBox lang="shell" comment="imageの削除">{`$ docker image rm ubuntu:latest`}</CodeBox>
                    <Text>ただし、削除しようとしているimageを利用しているコンテナが存在している場合は以下のようなエラーが表示され削除が実行されません。
                        imageを削除する場合は先にそのimageを利用しているコンテナを削除します。
                    </Text>
                    <CodeBox lang="shell" comment="image rm のエラー">{`$ docker image rm ubuntu:latest
Error response from daemon: conflict: unable to remove repository reference "ubuntu:latest" (must force) - container 080ec8d
841b6 is using its referenced image fec8bfd95b54`}</CodeBox>
                </Section>
                {/* <Section title="セクション名">
                    <SubSection>サブセクションタイトル</SubSection>
                    <Text>
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        <CodeIn>
                            {`console.log`}
                        </CodeIn>
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                    </Text>
                    <LinkIn link={"PythonInstall"} title={"ページのタイトルページのタイトルページのタイトル"}></LinkIn>
                    <CodeBox lang={"javascript"} comment={"コードの例"}>{`console.log("test")`}</CodeBox>
                    <ImageSet alt="テスト画像" height={200} width={200} image={image} />
                </Section> */}
            </Contents>
        </>
    )
}
