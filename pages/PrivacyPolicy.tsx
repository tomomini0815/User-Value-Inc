import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../constants';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-brand-black min-h-screen">
            {/* Header */}
            <div className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 container mx-auto">
                <div className="flex flex-col items-start border-b border-white/10 pb-10 md:pb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="font-mono text-xs text-brand-accent mb-4 md:mb-6 uppercase tracking-widest"
                    >
                        // Legal
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[0.9] tracking-tighter mb-6 md:mb-8 text-white"
                    >
                        PRIVACY POLICY
                    </motion.p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pb-24">
                <div className="max-w-3xl mx-auto text-gray-300 space-y-12 font-light leading-relaxed">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <p className="mb-8">
                            {COMPANY_INFO.name}（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
                        </p>

                        <h3 className="text-xl md:text-2xl text-white font-bold mb-4 mt-12">第1条（個人情報）</h3>
                        <p>
                            「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
                        </p>

                        <h3 className="text-xl md:text-2xl text-white font-bold mb-4 mt-12">第2条（個人情報の収集方法）</h3>
                        <p>
                            当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号、運転免許証番号などの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当社の提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます。）などから収集することがあります。
                        </p>

                        <h3 className="text-xl md:text-2xl text-white font-bold mb-4 mt-12">第3条（個人情報を収集・利用する目的）</h3>
                        <p className="mb-4">当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>当社サービスの提供・運営のため</li>
                            <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                            <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
                            <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                            <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                            <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
                            <li>有料サービスにおいて、ユーザーに利用料金を請求するため</li>
                            <li>上記の利用目的に付随する目的</li>
                        </ul>

                        <h3 className="text-xl md:text-2xl text-white font-bold mb-4 mt-12">第4条（利用目的の変更）</h3>
                        <p>
                            当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。利用目的の変更を行った場合には、変更後の目的について、当社所定の方法によりユーザーに通知し、または本ウェブサイト上に公表するものとします。
                        </p>

                        <h3 className="text-xl md:text-2xl text-white font-bold mb-4 mt-12">第5条（個人情報の第三者提供）</h3>
                        <p className="mb-4">
                            当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                            <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                            <li>予め次の事項を告知あるいは公表し、かつ当社が個人情報保護委員会に届出をしたとき</li>
                        </ul>

                        <h3 className="text-xl md:text-2xl text-white font-bold mb-4 mt-12">第6条（個人情報の開示）</h3>
                        <p>
                            当社は、本人から個人情報の開示を求められたときは、本人に対しこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
                        </p>

                        <h3 className="text-xl md:text-2xl text-white font-bold mb-4 mt-12">第7条（個人情報の訂正および削除）</h3>
                        <p>
                            ユーザーは、当社の保有する自己の個人情報が誤った情報である場合には、当社が定める手続きにより、当社に対して個人情報の訂正、追加または削除（以下、「訂正等」といいます。）を請求することができます。当社は、ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。
                        </p>

                        <h3 className="text-xl md:text-2xl text-white font-bold mb-4 mt-12">第8条（プライバシーポリシーの変更）</h3>
                        <p>
                            本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
                        </p>

                        <h3 className="text-xl md:text-2xl text-white font-bold mb-4 mt-12">第9条（お問い合わせ窓口）</h3>
                        <p>本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。</p>
                        <div className="mt-6 p-6 border border-white/10 bg-white/5 rounded-lg">
                            <p className="mb-2"><span className="text-gray-500 w-24 inline-block">社名</span> {COMPANY_INFO.name}</p>
                            <p className="mb-2"><span className="text-gray-500 w-24 inline-block">住所</span> {COMPANY_INFO.location}</p>
                            <p className="mb-2"><span className="text-gray-500 w-24 inline-block">代表者</span> {COMPANY_INFO.representative}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
