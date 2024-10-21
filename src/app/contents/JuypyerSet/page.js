import Meta from '@/components/Meta'
import Contents from '@/components/contents/Contents'
import Section from '@/components/contents/Section'
import SubSection from '../../components/contents/SubSection'
import Text from '@/components/contents/Text'
import CodeBox from '../../components/contents/CodeBox'
import CodeIn from '../../components/contents/CodeIn'
import LinkIn from '../../components/contents/LinkIn'
import ImageSet from '../../components/contents/ImageSet'
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"
import image4 from "./image4.jpg"
import image5 from "./image5.jpg"
import image6 from "./image6.jpg"

export const data = {
    title: "VS CodeでのJupyterファイルの実行",
    tag: ["Jupyer Notebook", "Python", "Linux"],
    date: ["2024", "10", "21"]
}

export default function test() {
    return (
        <>
            <Meta title={data.title} />
            <Contents data={data}>
                <Section title={"はじめに"}>
                    <Text>この記事では、VS CodeでのJupyterファイルの実行方法についてまとめています。</Text>
                    <Text>OSはLinux、仮想環境はAnacondaを想定しています。Anacondaのインストール方法は過去の記事でまとめているので、まだの方はそちらをご覧ください。</Text>
                    <LinkIn link={"PythonInstall"} title={"UbuntuでのPython環境構築"}></LinkIn>
                </Section>
                <Section title="VS Codeのセッティング">
                    <Text>Jupyterの拡張機能をインストールします。</Text>
                    <ImageSet alt="拡張機能Jupyter" height={200} width={600} image={image2} />
                </Section>
                <Section title="仮想環境の選択と実行">
                    <SubSection>Jupyterファイルの作成</SubSection>
                    <Text>作業ディレクトリでJupyterファイルを作成します。</Text>
                    <CodeBox lang={"python"} comment={"sample/sample.ipynb"}>{`import numpy as np
import matplotlib.pyplot as plt

x=np.arange(0,10,0.1)
y=np.sin(2*np.pi*x)

plt.plot(x,y)
plt.show()`}</CodeBox>
                    <SubSection>仮想環境の選択</SubSection>
                    <Text>VS Codeのエディタで、コード部分を選択した状態でShift+Enterでファイルを実行します。仮想環境が選択されていない状態で実行すると仮想環境の選択を誘導されます。</Text>
                    <Text>まず、「Python Environments…」を選択します。</Text>
                    <ImageSet alt="「Python Environments…」" height={300} width={600} image={image3} />
                    <Text>次に、baseの仮想環境を選択します。</Text>
                    <ImageSet alt="仮想環境baseの選択" height={300} width={600} image={image4} />
                    <Text>これで仮想環境の選択が完了したので、コードが実行されるか、もう一度Shift+Enterを押せば実行されるはずです。</Text>
                    <ImageSet alt="手動で仮想環境を選択" height={300} width={500} image={image6} />
                    <Text>仮想環境はエディタの右上からも手動で選択できます。</Text>
                    <ImageSet alt="手動で仮想環境を選択" height={150} width={300} image={image5} />
                    <Text>これでJupyterファイルを実行できるようになります。</Text>
                </Section>
            </Contents>
        </>
    )
}
