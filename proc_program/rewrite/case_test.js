load('/mnt/c/Users/unicornt/Desktop/0/pj/CodeAlchemist/bin/jsLib/V8.js');
codealchemist_log_type_pre('-5101397224707309332', ({}));
function ConstCaseInsensitiveTest(){
codealchemist_log_type_pre('3067154073767549882', ({}));
/[a-t]/i.test("abCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgz");
codealchemist_log_type_post('3067154073767549882', ({}));
}
codealchemist_log_type_post('-5101397224707309332', ({}));
codealchemist_log_type_pre('-23077342169779892', ({}));
function ConstCaseInsensitiveNonLatin1Test(){
codealchemist_log_type_pre('2882029447129089308', ({}));
/[α-ζ]/i.test("βκςΑφabcdeβκEFGαοςερκ");
codealchemist_log_type_post('2882029447129089308', ({}));
}
codealchemist_log_type_post('-23077342169779892', ({}));
codealchemist_log_type_pre('6268589920997165708', ({}));
const icre = /[a-t]/i;
codealchemist_log_type_post('6268589920997165708', ({v0 : ((typeof icre) != ('undefined')) ? (icre) : (undefined)}));
codealchemist_log_type_pre('4035762650185335103', ({v1 : ((typeof icre) != ('undefined')) ? (icre) : (undefined)}));
function GlobalConstCaseInsensitiveRegExpTest(){
codealchemist_log_type_pre('4612552703427048578', ({v0 : ((typeof icre) != ('undefined')) ? (icre) : (undefined)}));
icre.test("abCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgzabCdefgz");
codealchemist_log_type_post('4612552703427048578', ({v0 : ((typeof icre) != ('undefined')) ? (icre) : (undefined)}));
}
codealchemist_log_type_post('4035762650185335103', ({}));
codealchemist_log_type_pre('-5414777625370239', ({}));
const icre2 = /[α-ζ]/i;
codealchemist_log_type_post('-5414777625370239', ({v0 : ((typeof icre2) != ('undefined')) ? (icre2) : (undefined)}));
codealchemist_log_type_pre('-4800928318605225729', ({v1 : ((typeof icre2) != ('undefined')) ? (icre2) : (undefined)}));
function GlobalConstCaseInsensitiveNonLatin1RegExpTest(){
codealchemist_log_type_pre('-2441663426185607256', ({v0 : ((typeof icre2) != ('undefined')) ? (icre2) : (undefined)}));
icre2.test("βκςΑφabcdeβκEFGαοςερκ");
codealchemist_log_type_post('-2441663426185607256', ({v0 : ((typeof icre2) != ('undefined')) ? (icre2) : (undefined)}));
}
codealchemist_log_type_post('-4800928318605225729', ({}));
codealchemist_log_type_pre('1816577267335569864', ({}));
(benchmarks) = [];
codealchemist_log_type_post('1816577267335569864', ({v0 : ((typeof benchmarks) != ('undefined')) ? (benchmarks) : (undefined)}));
codealchemist_log_type_pre('3346070847307220716', ({v0 : ((typeof createBenchmarkSuite) != ('undefined')) ? (createBenchmarkSuite) : (undefined)}));
createBenchmarkSuite("CaseInsensitiveTest");
codealchemist_log_type_post('3346070847307220716', ({v0 : ((typeof createBenchmarkSuite) != ('undefined')) ? (createBenchmarkSuite) : (undefined)}));
